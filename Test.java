import java.util.Arrays;

public class Test{
    public static void main(String[] args) {
        int A[] = {2,4,9,8,6,3};
        int n=A.length;
        int mul=1;
        int max=0;
        
        for(int i=0;i<n-1;i++){
            for(int j=i+1;j<n;j++){
                mul=A[i]*A[j];
                if(mul>max){
                    max=mul;
                }
            }
        }
        System.out.println(max);
    }
}