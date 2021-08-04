using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;


namespace Agency.Service
{
    public class UserService : IService<ApplicationUser>
    {
       // private readonly UserRepository _user;
        private readonly CurrentTourRepository _currentTour;


        public UserService(//UserRepository user,
            CurrentTourRepository currentTour)
        {
         ////   _user = user;
            _currentTour = currentTour;
        }

        public IEnumerable<ApplicationUser> GetAll()
        {
            try
            {
                return null; //_user.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResultDTO Add(ApplicationUser element)
        {
            try
            {
                Initialize(element);

              //  _user.Create(element);

            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }

            return new ResultDTO()
            {
                Status = 200,
                Message = "User added"
            };

        }

        public ResultDTO Delete(string Id)
        {
            try
            {
               // _user.Delete(_user.GetById(Id));


            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }
            return new ResultDTO()
            {
                Status = 200,
                Message = "User deleted"
            };
        }

        public ResultDTO Update(ApplicationUser element)
        {
            try
            {
                Initialize(element);

               // _user.Update(element);

            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }
            return new ResultDTO()
            {
                Status = 200,
                Message = "User updated"
            };
        }

        public ApplicationUser GetById(string elementId)
        {
            try
            {

                return null;//_user.GetById(elementId);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ApplicationUser GetByName(string name)
        {
            try
            {
                return null;// _user.GetByName(name);

            }
            catch (Exception)
            {
                throw;
            }
        }

        public ApplicationUser Initialize(ApplicationUser element)
        {
            try
            {

                element.CurrentTour = _currentTour.GetByName(element.CurrentTour.Tour.Name);
                return element;
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
