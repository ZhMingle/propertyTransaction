using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data;

namespace backend.Services {
    public class PropertyService {
        private readonly ApplicationDbContext _context;

        public PropertyService(ApplicationDbContext context) {
            _context = context;
        }

        public async Task<List<Property>> GetAllPropertiesAsync() {
            return await _context.Properties.Include(p => p.Images).ToListAsync();
        }

        public async Task<Property> GetPropertyByIdAsync(int id) {
            return await _context.Properties.Include(p => p.Images).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Property> CreatePropertyAsync(Property property) {
            _context.Properties.Add(property);
            await _context.SaveChangesAsync();
            return property;
        }
        public async Task<Property?> UpdatePropertyStatusAsync(int id, string newStatus) {
            var property = await _context.Properties.FindAsync(id);
            if (property == null) return null;

            property.Status = newStatus;
            await _context.SaveChangesAsync();

            return property;
        }


        public async Task<Property> UpdatePropertyAsync(int id, Property updatedProperty) {
            var existingProperty = await _context.Properties.FindAsync(id);
            if (existingProperty == null) return null;

            _context.Entry(existingProperty).CurrentValues.SetValues(updatedProperty);
            await _context.SaveChangesAsync();
            return existingProperty;
        }

        public async Task<bool> DeletePropertyAsync(int id) {
            var property = await _context.Properties.FindAsync(id);
            if (property == null) return false;

            _context.Properties.Remove(property);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
