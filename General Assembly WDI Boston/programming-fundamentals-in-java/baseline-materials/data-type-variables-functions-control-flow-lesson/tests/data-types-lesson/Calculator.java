package ly.gengeneralassemb;


public class Calculator {

    public int intDivision(int dividend, int divisor){
        int quotient = 0;
        quotient = dividend/divisor;
        return quotient;
    }

    public float floatingPointDivision(float dividend, float divisor) {
        float quotient = 0f;
        quotient = dividend / divisor;
        return quotient;
    }

    public double doubleDivision(double dividend, double divisor) {
        double quotient = 0d;
        quotient = dividend / divisor;
        return quotient;
    }

    public long adds(int... numbers){
        int sum = 0;
        if(numbers.length > 0){
            for(Integer n : numbers){
                sum += n;
            }
        }
        return sum;
    }

    public long subtracts(int... numbers){
        int sum = numbers[0];
        if(numbers.length > 0){
            for(int i = 1; i < numbers.length; i++){
                sum -= numbers[i];
            }
        }
        return sum;
    }

    public long multiplies(int... numbers){
        int sum = 0;
        if(numbers.length > 0){
            for(Integer n : numbers){
                sum *= n;
            }
        }
        return sum;
    }

    public double pow(double base, double exponent){
        return Math.pow(base, exponent);
    }

    public double sqrt(double radicand){
        return Math.sqrt(radicand);
    }

    public double random(int range, int min){
        return (Math.random() * range) + min;
    }

}
