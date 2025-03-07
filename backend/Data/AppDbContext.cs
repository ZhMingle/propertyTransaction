using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace backend.Data {
    public class ApplicationDbContext : DbContext {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Property> Properties { get; set; }
        public DbSet<PropertyImage> PropertyImages { get; set; }
    }
}
