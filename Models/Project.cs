using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models
{
    public class Project
    {
        public string Name { get; set; }

        public string Content { get; set; }

        public List<string> Languages { get; set; }

        public string LogoURL { get; set; }

        public string LogoAltText { get; set; }

        public string GithubURL { get; set; }

        public string ProjectURL { get; set; }
    }
}
