using System;
using System.Threading.Tasks;
using EmployeeRecord.DTO;
using EmployeeRecord.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeeRecord.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;
        private readonly IEmployeeService _service;
        public EmployeeController(IEmployeeService service, ILogger<EmployeeController> logger)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.Get(id));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> Add(EmployeeDTO model)
        {
            return Ok(await _service.Add(model));
        }

        [HttpPut]
        public async Task<IActionResult> Update(EmployeeDTO model)
        {
            return Ok(await _service.Update(model));
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.Delete(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok();
        }
    }
}