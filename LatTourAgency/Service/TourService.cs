using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;
using Microsoft.AspNetCore.Hosting;

namespace Agency.Service
{
    public class TourService : IService<Tour>
    {
        private readonly TourRepository _tour;
        private readonly IWebHostEnvironment _env;
      

        public TourService(TourRepository tour,
             IWebHostEnvironment env)
        {
            _tour = tour;
            this._env = env;
        }

     
        public ResultDTO Add(Tour element)
        {
            try
            {
                var base64 = element.MainImage;
                if (base64.Contains(","))
                {
                    base64 = base64.Split(',')[1];
                }
                var bmp = FromBase64StringToImage(base64);

                var serverPath = _env.ContentRootPath;

                var path = Path.Combine(serverPath, "Uploads"); //
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var fileName = Path.GetRandomFileName() + ".jpg";

                var filePathSave = Path.Combine(path, fileName);

                bmp.Save(filePathSave, ImageFormat.Jpeg);
                element.MainImage = fileName;
                _tour.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Tour added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                var element = _tour.GetById(Id);
                var serverPath = _env.ContentRootPath;

                var path = Path.Combine(serverPath, "Uploads");


                if(File.Exists(Path.Combine(path, element.MainImage)))
                {
                    File.Delete(Path.Combine(path, element.MainImage));
                }
                _tour.Delete(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Tour deleted"
            };
        }

        public IEnumerable<Tour> GetAll()
        {
            try
            {
                
                return _tour.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Tour GetById(string elementId)
        {
            return _tour.GetById(elementId);
        }

        public Tour GetByName(string name)
        {
            return _tour.GetByName(name);
        }

        public Tour Initialize(Tour element)
        {
            throw new NotImplementedException();
        }

        public ResultDTO Update(Tour element)
        {
            try
            {
               
                var serverPath = _env.ContentRootPath;

                var path = Path.Combine(serverPath, "Uploads");


                if (File.Exists(Path.Combine(path, element.MainImage)))
                {
                    File.Delete(Path.Combine(path, element.MainImage));
                }
                _tour.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Tour updated"
            };
        }

        private static Bitmap FromBase64StringToImage(string base64String)
        {
            byte[] byteBuffer = Convert.FromBase64String(base64String);
            try
            {
                using (MemoryStream memoryStream = new MemoryStream(byteBuffer))
                {
                    memoryStream.Position = 0;
                    using (Image imgReturn = Image.FromStream(memoryStream))
                    {
                        memoryStream.Close();
                        byteBuffer = null;
                        return new Bitmap(imgReturn);
                    }
                }
            }
            catch { return null; }

        }
    }
}
