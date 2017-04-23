using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCore.Model;

namespace ReactCore.Interfaces
{
    public interface ICpuRepository
    {
        Task<IEnumerable<Cpu>> GetAllCpus();
        Task<Cpu> GetCpu(string id);
    }
}
