namespace Cinema.TestClasses
{
    public class Employee
    {
        public string GetName(string firstName, string lastName)
        {
            return string.Concat(firstName, " ", lastName);
        }
    }
}
