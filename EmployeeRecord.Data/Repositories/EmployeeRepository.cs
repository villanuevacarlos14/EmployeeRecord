using EmployeeRecord.Data.Models;
using EmployeeRecord.Data.Repositories.Interfaces;

namespace EmployeeRecord.Data.Repositories
{
    public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(EmployeeRecordContext context) : base(context)
        {
        }
    }
}