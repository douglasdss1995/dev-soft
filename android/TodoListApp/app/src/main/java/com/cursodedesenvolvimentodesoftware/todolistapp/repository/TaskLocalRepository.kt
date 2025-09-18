package com.cursodedesenvolvimentodesoftware.todolistapp.repository

import com.cursodedesenvolvimentodesoftware.todolistapp.data.Task

class TaskLocalRepository {
    private val _tasks = mutableListOf<Task>()

    // Simulando dados iniciais
    init {
        _tasks.addAll(listOf(
            Task(1, "Aprender Kotlin", "Estudar sintaxe básica", false),
            Task(2, "Criar primeiro app", "Todo List simples", false),
            Task(3, "Configurar ambiente", "Android Studio + SDK", true)
        ))
    }

    // Função para buscar todas as tasks
    fun getAllTasks(): List<Task> = _tasks.toList()

    // Função para adicionar task
    fun addTask(task: Task): Task {
        val newTask = task.copy(id = _tasks.size + 1)
        _tasks.add(newTask)
        return newTask
    }

    // Função para atualizar task
    fun updateTask(task: Task): Task? {
        val index = _tasks.indexOfFirst { it.id == task.id }
        return if (index != -1) {
            _tasks[index] = task
            task
        } else null
    }

    // Função para deletar task
    fun deleteTask(taskId: Int): Boolean {
        return _tasks.removeIf { it.id == taskId }
    }
}