# Just for understanding, never really used.
# Add an instance method to all subclasses of Object.
# pretty much everything.
class Object
  # get the memory address of an object
  def get_mem_address
    "0x" + (self.object_id << 1).to_s(16)
  end
end