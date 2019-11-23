using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Domain
{
    public class ProjectSource
    {
        private static readonly string DB_CONNECTION_STRING = ConfigurationManager.ConnectionStrings["databaseConnection"].ConnectionString;

        public static List<Project> GetProjects()
        {
            List<Project> projects = new List<Project>();

            using(SqlConnection connection = new SqlConnection(DB_CONNECTION_STRING))
            {
                using(SqlCommand command = new SqlCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.CommandText = "sp_GetProjects";
                    command.Connection = connection;
                    connection.Open();

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            projects.Add(new Project
                            {
                                Name = reader["ProjectName"].ToString(),
                                Content = reader["ProjectContent"].ToString(),
                                Languages = reader["ProjectLanguages"].ToString().Split(',').ToList(),
                                LogoURL = reader["LogoUrl"].ToString(),
                                LogoAltText = reader["LogoAltText"].ToString(),
                                GithubURL = reader["GithubUrl"].ToString(),
                                ProjectURL = (reader["ProjectUrl"] != DBNull.Value ? reader["ProjectUrl"].ToString() : null),
                            });
                        }
                    }
                }
                
            }
            return projects;
        }
    }
}
