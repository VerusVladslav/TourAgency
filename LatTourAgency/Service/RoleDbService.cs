

using Agency.DAL.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Agency.BLL.Service.DataBaseSevices.Account
{
    public static class RoleDbService
    {

        public static Task<IdentityResult> AddRoleToUser(ApplicationUser user,
            UserManager<ApplicationUser> userManager,
            string Role)
        {
            return userManager.AddToRoleAsync(user, Role);
        }



        public static Task<IdentityResult> CreateRole(ApplicationUser user
            , UserManager<ApplicationUser> userManager
            , string password)
        {
            return userManager.CreateAsync(user, password);
        }
    }
}
