
using Agency.BLL.Interfaces;
using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Agency.BLL.Implementations
{
    public class JWTTokenService : IJWTTokenService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly UserManager<ApplicationUser> _userManager;

        public JWTTokenService(ApplicationDbContext context, IConfiguration configuration, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _configuration = configuration;
            _userManager = userManager;
        }



        public string CreateToken(ApplicationUser user)
        {
            var roles = _userManager.GetRolesAsync(user).Result;

            var claims = new List<Claim>
            {
                new Claim("id", user.Id.ToString()),
                new Claim("email", user.Email.ToString())
            };

            foreach (var role in roles)
            {
                claims.Add(new Claim("roles", role));
            }

            string jwtRokenSecretKey = _configuration.GetValue<string>("SecretPhrase");

            var signInKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtRokenSecretKey));
            var signsInCredentials = new SigningCredentials(signInKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                    signingCredentials: signsInCredentials,
                    claims: claims,
                    expires: DateTime.Now.AddDays(7)
                   );

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
