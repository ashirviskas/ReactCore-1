using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactCore.Interfaces;

namespace ReactCore.Controllers
{
    [Produces("application/json")]
    [Route("api/cpu")]
    public class CpuController: Controller
    {
        private readonly ICpuRepository _noteRepository;

        public CpuController(ICpuRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

           [HttpGet]
    public Task<string> Get()
    {
        return GetNoteInternal();
    }

    private async Task<string> GetNoteInternal()
    {
        var notes = await _noteRepository.GetAllCpus();
        return JsonConvert.SerializeObject(notes);
    }

    }
}
