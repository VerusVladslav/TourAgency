using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Agency.DAL.Repository.Abstraction;
using Agency.DTO;
using Agency.DAL.Models;
using Agency.Results;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel;
using Agency.Service;

namespace Agency.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
    //public class UserController : Controller
    //{
    //    private readonly IMapper mapper;
    //    private readonly UserService _userService;
    //    private readonly UserManager<ApplicationUser> _userManager;
    //    //private readonly SignInManager<ApplicationUser> _signInManager;
    //    //private readonly IJwtTokenService _IJwtTokenService;
    //    //private readonly IConfiguration _configuration;
    //    //private readonly IEmailSender _emailSender;
    //    //private readonly IWebHostEnvironment _env;

    //    public UserController(UserRepository userRepository,
    //        CurrentTourRepository currentTourRepository,
    //        UserManager<ApplicationUser> userManager,
    //        IMapper map)
    //    {
    //        _userService = new UserService(userRepository, currentTourRepository);
    //        mapper = map;
    //        _userManager = userManager;
    //    }




    //    public IActionResult Index()
    //    {
    //        return View();
    //    }
        

    //    [HttpPost("Register")]
    //    public ResultDTO Register([FromBody] ApplicationUserDTO newuser)
    //    {
    //        try
    //        {

    //             var user = mapper.Map<ApplicationUser>(newuser);
    //            return new ResultDTO()
    //            {
    //                Status = 200,
    //                Message = "Registration successful"
    //            };
    //        }
    //        catch (Exception ex)
    //        {
    //            var win32ex = (Win32Exception)ex.InnerException;
    //            return new ResultDTO
    //            {
    //                Status = win32ex.ErrorCode,
    //                Message = ex.Message
    //            };
    //        }

    //    }

    //    [HttpGet("Name/{username}")]
    //    public ApplicationUserDTO GetUserByName([FromRoute] string username)
    //    {
    //        try
    //        {
    //            var user = mapper.Map<ApplicationUserDTO>(_userService.GetByName(username));

    //            return user;
    //        }
    //        catch { throw; }
    //    }
    //    [HttpGet("{id}")]
    //    public ApplicationUserDTO GetUserById([FromRoute] string id)
    //    {
    //        try
    //        {

    //        var user = mapper.Map<ApplicationUserDTO>(_userService.GetById(id));
    //        return user;
    //        }  
    //        catch { throw; }
    //    }

    //    [HttpGet("AllFood")]
    //    public List<ApplicationUserDTO> GetAllUser()
    //    {
    //        try
    //        {
    //        var user = mapper.Map<List<ApplicationUserDTO>>(_userService.GetAll().ToList());
    //        return user;

    //        }
              
    //        catch { throw; }
    //    }
    //    [HttpPost("AddFood")]
    //    public ResultDTO AddUser([FromBody] ApplicationUserDTO newuser)
    //    {
    //        var user=new ApplicationUser();
    //        try
    //        {
    //          user = mapper.Map<ApplicationUser>(newuser);

    //        }
    //        catch (Exception ex)
    //        {
    //            var win32ex = (Win32Exception)ex.InnerException;
    //            return new ResultDTO
    //            {
    //                Status = win32ex.ErrorCode,
    //                Message = ex.Message
    //            };
    //        }
    //      return  _userService.Add(user);

             
         

    //    }

    //    [HttpDelete("Delete/{id}")]
    //    public ResultDTO DeleteUserById([FromRoute] string id)
    //    {
            
    //      return  _userService.Delete(id);
          
    //    }
    //    [HttpPut("Update")]
    //    public ResultDTO UpdateUser([FromBody] ApplicationUserDTO user)
    //    {
    //        try
    //        {
    //            var newuser = mapper.Map<ApplicationUser>(user);
    //             return   _userService.Update(newuser);
               
    //        }
           
    //           catch (Exception ex)
    //             {
    //            var win32ex = (Win32Exception)ex.InnerException;
    //            return new ResultDTO
    //            {
    //                Status = win32ex.ErrorCode,
    //                Message = ex.Message
    //            };
            
    //     }
    //    }
    //}
}
