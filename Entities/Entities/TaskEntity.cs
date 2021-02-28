﻿using System.ComponentModel;

namespace TaskManagementPortal.Entities.Entities
{
    public class TaskEntity : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        [DefaultValue(false)]
        public bool IsComplete { get; set; }
    }
}
