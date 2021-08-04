using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Agency.BLL.Service.Authentification
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            using (var message = new MailMessage())
            {
                message.To.Add(new MailAddress(email, email));
                message.From = new MailAddress("verstesting@gmail.com", "Dimol");
                message.Subject = subject;
                message.Body = htmlMessage;

                using (var client = new SmtpClient("smtp.gmail.com", 587))
                {
                    client.Port = 587;
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("verstesting@gmail.com", "Qwerty1-");
                    client.EnableSsl = true;
                    client.Send(message);
                }
            }
            return Task.CompletedTask;
        }
    }
}
