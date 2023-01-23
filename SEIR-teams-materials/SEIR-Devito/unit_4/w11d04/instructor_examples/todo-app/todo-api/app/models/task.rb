class Task
  # ==================================================
  #                      SET UP
  # ==================================================
  # add attribute readers for instance accesss
  attr_reader :id, :task, :completed

  # connect to postgres
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'todo_development'})

  # initialize options hash
  def initialize(opts = {}, id = nil)
    @id = id.to_i
    @task_item = opts["task_item"]
    @completed = opts["completed"]
  end

  # ==================================================
  #                 PREPARED STATEMENTS
  # ==================================================
  # find task
  DB.prepare("find_task",
    <<-SQL
      SELECT tasks.*
      FROM tasks
      WHERE tasks.id = $1;
    SQL
  )

  # create task
  DB.prepare("create_task",
    <<-SQL
      INSERT INTO tasks (task_item, completed)
      VALUES ( $1, $2 )
      RETURNING id, task_item, completed;
    SQL
  )

  # delete task
  DB.prepare("delete_task",
    <<-SQL
      DELETE FROM tasks
      WHERE id=$1
      RETURNING id;
    SQL
  )

  # update task
  DB.prepare("update_task",
    <<-SQL
      UPDATE tasks
      SET task_item = $2, completed = $3
      WHERE id = $1
      RETURNING id, task_item, completed;
    SQL
  )

  # ==================================================
  #                      ROUTES
  # ==================================================
  # get all tasks
  def self.all
    results = DB.exec("SELECT * FROM tasks;")
    return results.map do |result|
      # turn completed value into boolean
      if result["completed"] === 'f'
        result["completed"] = false
      else
        result["completed"] = true
      end
      # create and return the tasks
      task = Task.new(result, result["id"])
    end
  end

  # get one task by id
  def self.find(id)
    # find the result
    result = DB.exec_prepared("find_task", [id]).first
    p result
    p '---'
    # turn completed value into boolean
    if result["completed"] === 'f'
      result["completed"] = false
    else
      result["completed"] = true
    end
    p result
    # create and return the task
    task = Task.new(result, result["id"])
  end

  # create one
  def self.create(opts)
    # if opts["completed"] does not exist, default it to false
    if opts["completed"] === nil
      opts["completed"] = false
    end
    # create the task
    results = DB.exec_prepared("create_task", [opts["task_item"], opts["completed"]])
    # turn completed value into boolean
    if results.first["completed"] === 'f'
      completed = false
    else
      completed = true
    end
    # return the task
    task = Task.new(
      {
        "task_item" => results.first["task_item"],
        "completed" => completed
      },
      results.first["id"]
    )
  end

  # delete one
  def self.delete(id)
    # delete one
    results = DB.exec_prepared("delete_task", [id])
    # if results.first exists, it successfully deleted
    if results.first
      return { deleted: true }
    else # otherwise it didn't, so leave a message that the delete was not successful
      return { message: "sorry cannot find person at id: #{id}", status: 400}
    end
  end

  # update one
  def self.update(id, opts)
    # update the task
    results = DB.exec_prepared("update_task", [id, opts["task_item"], opts["completed"]])
    # if results.first exists, it was successfully updated so return the updated task
    if results.first
      if results.first["completed"] === 'f'
        completed = false
      else
        completed = true
      end
      # return the task
      task = Task.new(
        {
          "task_item" => results.first["task_item"],
          "completed" => completed
        },
        results.first["id"]
      )
    else # otherwise, alert that update failed
      return { message: "sorry, cannot find task at id: #{id}", status: 400 }
    end
  end

end
