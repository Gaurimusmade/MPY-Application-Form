using Microsoft.AspNetCore.Mvc;

namespace ApplicationForm.Controllers
{
    public class Form : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
