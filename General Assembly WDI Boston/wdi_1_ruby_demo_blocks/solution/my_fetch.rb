# AAAAAARRRRGGG! changing a ruby class, be careful
# Rails does this this A LOT!!!

class Hash

  def my_fetch(key, &block)

    begin
    rescue KeyError => e
      if !block_given? 
        raise e
      else
        block.call
      end      
    end

  end
  
end
