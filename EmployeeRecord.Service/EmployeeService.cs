using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using EmployeeRecord.Data.Models;
using EmployeeRecord.Data.Repositories.Interfaces;
using EmployeeRecord.DTO;
using Microsoft.EntityFrameworkCore;

namespace EmployeeRecord.Service
{
    public interface IEmployeeService
    {
        public Task<EmployeeDTO> Get(int id);
        public Task<IEnumerable<EmployeeDTO>> GetAll();
        public Task<EmployeeDTO> Add(EmployeeDTO model);
        public Task<EmployeeDTO> Update(EmployeeDTO model);
        public Task Delete(int id);
    }
    public class EmployeeService : IEmployeeService
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeRepository _repository;

        public EmployeeService(IEmployeeRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<EmployeeDTO> Add(EmployeeDTO model)
        {
            return _mapper.Map<EmployeeDTO>(await _repository.AddAsync(_mapper.Map<Employee>(model)));
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(await _repository.GetAsync(id));
        }

        public async Task<EmployeeDTO> Get(int id)
        {
            return _mapper.Map<EmployeeDTO>(await _repository.GetAsync(id));
        }

        public async Task<IEnumerable<EmployeeDTO>> GetAll()
        {
            return _mapper.Map<IEnumerable<EmployeeDTO>>(await _repository.GetAll().ToListAsync());
        }

        public async Task<EmployeeDTO> Update(EmployeeDTO model)
        {
            return _mapper.Map<EmployeeDTO>(await _repository.UpdateAsync(_mapper.Map<Employee>(model)));
        }
    }
}