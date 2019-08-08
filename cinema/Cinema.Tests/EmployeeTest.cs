using System;
using Cinema;
using Cinema.TestClasses;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Cinema.Tests
{
    [TestClass]
    public class EmployeeTest
    {
        [TestMethod]
        public void GetNameTest()
        {
            //Arrange  
            Employee objEmployee = new Employee();
            String firstName = "Narasimha";
            String lastName = "Reddy";
            String expected = "Narasimha Reddy";
            String actual;

            //Act  
            actual = objEmployee.GetName(firstName, lastName);

            //Assert  
            Assert.AreEqual(expected, actual);
        }
    }
}
