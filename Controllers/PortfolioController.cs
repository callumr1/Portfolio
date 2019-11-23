using Portfolio.Domain;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class PortfolioController : Controller
    {
        public ActionResult Index()
        {
            List<Project> projects = ProjectSource.GetProjects();
            return View(projects);
        }
    }
}