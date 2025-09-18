package com.cursodedesenvolvimentodesoftware.todolistapp.viewmodel

// viewmodel/TaskViewModel.kt
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.cursodedesenvolvimentodesoftware.todolistapp.data.Task
import com.cursodedesenvolvimentodesoftware.todolistapp.data.toggleComplete
import com.cursodedesenvolvimentodesoftware.todolistapp.repository.TaskLocalRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class TaskViewModel : ViewModel() {
    private val repository = TaskLocalRepository()

    // Estado da UI usando StateFlow (conceito importante!)
    private val _tasks = MutableStateFlow<List<Task>>(emptyList())
    val tasks: StateFlow<List<Task>> = _tasks

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    init {
        loadTasks()
    }

    // Carrega as tasks
    private fun loadTasks() {
        viewModelScope.launch {
            _isLoading.value = true
            try {
                _tasks.value = repository.getAllTasks()
            } finally {
                _isLoading.value = false
            }
        }
    }

    // Adiciona nova task
    fun addTask(titulo: String, descricao: String = "") {
        if (titulo.isBlank()) return

        viewModelScope.launch {
            val newTask = Task(titulo = titulo, descricao = descricao)
            repository.addTask(newTask)
            loadTasks() // Recarrega a lista
        }
    }

    // Toggle do status da task
    fun toggleTaskComplete(task: Task) {
        viewModelScope.launch {
            repository.updateTask(task.toggleComplete())
            loadTasks()
        }
    }

    // Remove task
    fun deleteTask(taskId: Int) {
        viewModelScope.launch {
            repository.deleteTask(taskId)
            loadTasks()
        }
    }
}