using System;
using System.Collections.Generic;
using System.Text;

namespace Cinema.Tests.TestClasses
{
    public class Employee
    {
        public string GetName(string firstName, string lastName)
        {
            return string.Concat(firstName, " ", lastName);
        }
    }
}
