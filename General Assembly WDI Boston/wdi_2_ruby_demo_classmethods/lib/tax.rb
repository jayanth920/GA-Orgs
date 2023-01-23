module GA

  module Tax
    TaxTable = {MA: 5.2, CONN: 6.2, NH: 0.0, VT: 5.2, ME: 5.7 }
    FED_RATE = 3.2

    def state_rate(state)
      TaxTable[state.to_sym]
    end

  end
end
