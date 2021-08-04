using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;

namespace Agency.Service

{
    public class TourReviewService : IService<TourReview>
    {
        private readonly TourReviewRepository _tourReview;
        private readonly TourRepository _tour;
       


        public TourReviewService(TourReviewRepository tourReview,
            TourRepository tour
            
            )
        {
            _tourReview = tourReview;
            _tour = tour;
           
        }

        public ResultDTO Add(TourReview element)
        {
            try
            {
                Initialize(element);
                _tourReview.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Review added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _tourReview.Delete(_tourReview.GetById(Id));
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Review deleted"
            };
        }

        public IEnumerable<TourReview> GetAll()
        {
            try
            {
                return _tourReview.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public TourReview GetById(string elementId)
        {
            return _tourReview.GetById(elementId);
        }

        public TourReview GetByName(string name)
        {
            throw new NotImplementedException();
        }

        public TourReview Initialize(TourReview element)
        {
            element.Tour = _tour.GetByName(element.Tour.Name);
         //   element.User = _user.GetByName(element.User.UserName);

            return element;
        }

        public ResultDTO Update(TourReview element)
        {
            try
            {
                Initialize(element);
                _tourReview.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Review updated"
            };
        }
    }
}
