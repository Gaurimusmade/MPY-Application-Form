using ApplicationForm.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ApplicationForm.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
       
        public ActionResult AddressDetails()
        {
            return View();
        }
        public ActionResult EducationalDetails()
        {
            return View();
        }
        public ActionResult PassportDetails()
        {
            return View();
        }
        public ActionResult CompanyDetails()
        {
            return View();
        }
        public ActionResult PersonalAssesmentDetails()
        {
            return View();
        }
        public ActionResult DeclarationAuth()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}