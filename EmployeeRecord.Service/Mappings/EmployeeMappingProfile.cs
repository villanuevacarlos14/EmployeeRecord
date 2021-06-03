using AutoMapper;
using EmployeeRecord.Data.Models;
using EmployeeRecord.DTO;

namespace EmployeeRecord.Service.Mappings
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            CreateMap<EmployeeDTO, Employee>();
            CreateMap<Employee, EmployeeDTO>();
        }
    }
}