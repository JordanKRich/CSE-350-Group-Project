using Microsoft.AspNetCore.Mvc;

namespace GroupProject.Controllers
{
    public class MeetOurTeamController : Controller
    {
        private readonly ILogger<MeetOurTeamController> _logger;
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult CW()
        {
            return View("CW");
        }

        public IActionResult JR()
        {
            return View("JR");
        }
        public IActionResult blahblah()
        {
            return View("blahblah");
        }

        public IActionResult CG()
        {
            return View("CG");
        }
    }
}
