
using Agency.DAL.Models;

namespace Agency.BLL.Interfaces
{
    public interface IJWTTokenService
    {
        string CreateToken(ApplicationUser user);
    }
}
