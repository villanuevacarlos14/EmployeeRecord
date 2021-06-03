using EmployeeRecord.Data.Mappings;
using EmployeeRecord.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeRecord.Data
{
    public class EmployeeRecordContext : DbContext
    {
        public EmployeeRecordContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new EmployeeConfiguration());
        }
    }
}