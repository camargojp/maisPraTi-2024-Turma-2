//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        System.out.println("-------------------------");
//        System.out.println("Conversor de temperaturas");
//        System.out.println("-------------------------");
//
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Escolha uma opção de conversão: ");
//        System.out.println("1 - Celsius para Fahrenheit");
//        System.out.println("2 - Fahrenheit para Celsius");
//        System.out.print(("Digite uma opção (1 ou 2): "));
//        int option = scanner.nextInt();
//
//        double temperature;
//        double result;
//
//        switch (option) {
//            case 1:
//                System.out.print("Digite a temperatura em Celsius: ");
//                temperature = scanner.nextDouble();
//                result = celsiusToFahrenheit(temperature);
//                System.out.println(temperature + "°C é igual a " + result + "°F.");
//                break;
//
//            case 2:
//                System.out.println("Digite a temperatura em Fahrenheit: ");
//                temperature = scanner.nextDouble();
//                result = fahrenheitToCelsius(temperature);
//                System.out.println(temperature + "°F é igual a " + result + "°C." );
//                break;
//
//            default:
//                System.out.println("Opção inválida!");
//        }
//
//        scanner.close();
//    }
//
//    public static double celsiusToFahrenheit(double celsius) {
//        return(celsius * 9/5) + 32;
//    }
//
//    public static double fahrenheitToCelsius(double fahrenheit) {
//        return(fahrenheit - 32) * 5/9;
//    }
//}

//Idade

//public class Main {
//    public static void main(String[] args) {
//        int idade = 24;
//
//        if(idade >= 18) {
//            System.out.println("Você é maior de idade!");
//        } else {
//            System.out.println(("Você é menor de idade!"));
//        }
//    }
//}

//Par ou impar

//public class Main  {
//    public static void main(String[] args) {
//        int numero = 4;
//        int resto = numero % 2;
//
//        if(resto == 0) {
//            System.out.println("O número é PAR!");
//        } else {
//            System.out.println("O número é IMPAR!");
//        }
//    }
//}

//dia da semana com switch case

//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        Scanner numero = new Scanner(System.in);
//
//        System.out.print("Digite um número de 1 a 7: ");
//        int dia = numero.nextInt();
//
//        switch (dia) {
//            case 1:
//                System.out.println("Segunda-feira");
//                break;
//
//            case 2:
//                System.out.println("Terça-feira");
//                break;
//
//            case 3:
//                System.out.println("Quarta-feira");
//                break;
//
//            case 4:
//                System.out.println("Quinta-feira");
//                break;
//
//            case 5:
//                System.out.println("Sexta-feira");
//                break;
//
//            case 6:
//                System.out.println("Sábado");
//                break;
//
//            case 7:
//                System.out.println("Domingo");
//                break;
//
//            default:
//                System.out.println("Opção inválida!");
//                break;
//        }
//    }
//}

// Saber se o ano é bissexto

//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("Digite um ano: ");
//        int ano = sc.nextInt();
//
//        if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
//            System.out.println(ano + " é um ano bissexto!");
//        } else {
//            System.out.println(ano + " não é um ano bissexto!");
//        }
//    }
//}

// calculadora simples

//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("Digite um número: ");
//        double num1 = sc.nextDouble();
//
//        System.out.print("Digite o segundo número: ");
//        double num2 = sc.nextDouble();
//
//        System.out.print("Digite o operador (+, -, /, *): ");
//        char operador = sc.next().charAt(0);
//
//        double resultado = 0;
//
//        switch(operador) {
//            case '+':
//                resultado = num1 + num2;
//                break;
//            case '-':
//                resultado = num1 - num2;
//                break;
//            case '/':
//                if(num2 != 0) {
//                    resultado = num1 / num2;
//                } else {
//                    System.out.println("Erro: Divisão por zero!");
//                }
//                break;
//            case '*':
//                resultado = num1 * num2;
//                break;
//            default:
//                System.out.println("Operador inválido!");
//                break;
//        }
//
//        System.out.println("O resultado é: " + resultado);
//    }
//}

//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int count = 0;
//        while(true){
//            if(count == 3){
//                System.out.println("Excedeu o limite de tentativas!");
//                break;
//            }
//
//            System.out.println("Informe o usuário: ");
//            String user = sc.next();
//
//            System.out.println("Informe a senha: ");
//            String password = sc.next();
//
//            if(user.equals("Teste") && password.equals("1234")) {
//                System.out.println("Login efetuado com sucesso!");
//                break;
//            } else {
//                System.out.println("Senha ou usuário incorreto!");
//                count++;
//            }
//        }
//    }
//}

//Imprimir os números de 0 a 10 com FOR

//public class Main {
//    public static void main(String[] args) {
//        for (int i = 0; i <= 10; i++) {
//            System.out.println(i);
//        }
//    }
//}

//Imprimir os números de 0 a 10 com WHILE

//public class Main {
//    public static void main(String[] args) {
//        int i = 0;
//        while(i <= 10){
//            System.out.println(i);
//            i++;
//        }
//    }
//}

//Imprimir os números de 0 a 10 com DO-WHILE

//public class Main {
//    public static void main(String[] args) {
//        int i = 0;
//        do{
//            System.out.println(i);
//            i++;
//        } while (i <= 10);
//    }
//}

//Manipulação de String

//public class Main {
//    public static void main(String[] args) {
//        String texto = "Java é uma excelente linguagem de programação";
//
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculas = texto.toUpperCase();
//        System.out.println((maiusculas));
//
//        String minusculas = texto.toLowerCase();
//        System.out.println(minusculas);
//
//        Boolean contem = texto.contains("Java");
//        System.out.println(contem);
//
//        String substituto = texto.replace("Java", "PHP");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 4);
//        System.out.println(substring);
//
//Funções matemáticas
//
//        double num = 50.30; // Declara uma variável double.
//        double arredondado = Math.round(num); // Arredonda o número para o inteiro mais próximo.
//        System.out.println(arredondado); // Imprime o valor arredondado.
//        double arredondadoPraCima = Math.ceil(num); // Arredonda o número para cima.
//        System.out.println(arredondadoPraCima); // Imprime o valor arredondado para cima.
//        double arredondadoPraBaixo = Math.floor(num); // Arredonda o número para baixo.
//        System.out.println(arredondadoPraBaixo); // Imprime o valor arredondado para baixo.
//        double raizQuadrada = Math.sqrt(num); // Calcula a raiz quadrada do número.
//        System.out.println(raizQuadrada); // Imprime a raiz quadrada.
//        double absoluto = Math.abs(num); // Obtém o valor absoluto do número.
//        System.out.println(absoluto); // Imprime o valor absoluto.
//        double aleatorio = Math.random(); // Gera um número aleatório entre 0.0 e 1.0.
//        System.out.println(aleatorio); // Imprime o número aleatório.
//    }
//}

//public class Main {
//    public static void main(String[] args) {
//        int[] vetor = new int[5];
//
//        vetor[0] = 1;
//        vetor[1] = 2;
//        vetor[2] = 3;
//        vetor[3] = 4;
//        vetor[4] = 5;
//
//        for(int j = 0; j < vetor.length; j++){
//            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
//        }
//    }
//}

//Imprimir o valor máximo no Array

//public class Main {
//    public static void main(String[] args) {
//      int[] numbers = {41, 3, 18, 50, 9, 4, 2};
//
//      int maxValue = numbers[0];
//
//      for (int i = 1; i < numbers.length; i++) {
//          if (numbers[i] > maxValue) {
//              maxValue = numbers[i];
//          }
//      }
//
//        System.out.println("Valor máximo no array: " + maxValue);
//    }
//}

//Soma dos elementos do Array

//public class Main {
//    public static void main (String[] args) {
//        int[] numbers = {1, 5, 10, 34, 7};
//
//        int sum = 0;

//        for (int j = 0; j < numbers.length; j++) {
//            sum += numbers[j];
//        }
//        System.out.println("Soma do array: " + sum);
//    }
//}

//Revertendo o Array

//public class Main {
//    public static void main(String[] args) {
//        int[] vetor = new int[5];
//
//        vetor[0] = 1;
//        vetor[1] = 2;
//        vetor[2] = 3;
//        vetor[3] = 4;
//        vetor[4] = 5;
//
//        int start = 0;
//        int end = vetor.length - 1;
//
//        while (start < end) {
//            int temp = vetor[start];
//
//            vetor[start] = vetor[end];
//
//            vetor[end] = temp;
//
//            start++;
//            end--;
//        }
//
//        System.out.println("Array 'vetor' invertido: ");
//        for (int j = 0; j < vetor.length; j++) {
//            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
//        }
//    }


//Adicionar um elemento a um Array

//public class Main {
//    public static void main(String[] args) {
//        int[] vetor = new int[5];
//
//        vetor[0] = 1;
//        vetor[1] = 2;
//        vetor[2] = 3;
//        vetor[3] = 4;
//        vetor[4] = 5;
//
//        int[] newArray = new int[vetor.length + 1];
//
//        for (int j = 0; j < vetor.length; j++) {
//            newArray[j] = vetor[j];
//        }
//
//        newArray[vetor.length] = 1;
//    }
//}

//Remover um elemento de um Array

//public class Main {
//    public static void main(String[] args) {
//        int[] vetor = new int[5];
//
//        vetor[0] = 1;
//        vetor[1] = 2;
//        vetor[2] = 3;
//        vetor[3] = 4;
//        vetor[4] = 5;
//
//        int countRemocao = 0;
//
//        for (int j = 0; j < vetor.length; j++) {
//            if(vetor[j] != 5) {
//                countRemocao++;
//            }
//        }
//
//        int[] newArrayRemocao = new int[countRemocao];
//
//        int index = 0;
//
//        for (int j = 0; j < newArrayRemocao.length; j++) {
//            if (vetor[j] != 5) {
//                newArrayRemocao[index] = vetor[j];
//                index++;
//            }
//        }
//
//        System.out.println("Array após remoção: ");
//        for (int j = 0; j < newArrayRemocao.length; j++) {
//            System.out.println("Elemento na posição "+ j + ": " + newArrayRemocao[j]);
//        }
//    }
//}

//Somar a diagonal principal e secundária da matriz

//public class Main {
//    public static void main(String[] args) {
//        int[][] matriz = {
//                {10, 20, 30},
//                {40, 50, 60},
//                {70, 80, 90}
//        };
//
//        int somaDiagPrincipal = 0;
//        int somaDiagSecundaria = 0;
//
//        int n = matriz.length;
//
//        for (int i = 0; i < n; i++) {
//            somaDiagPrincipal += matriz[i][i];
//            somaDiagSecundaria += matriz[i][n - 1 - i];
//        }
//        System.out.println("Soma da diagonal principal: " + somaDiagPrincipal);
//        System.out.println("Soma da diagonal secundária: " + somaDiagSecundaria);
//    }
//}

//Rotacionar a matriz 90 graus

public class Main {
    public static void main(String[] args) {
        int[][] matriz = {
                {10, 20, 30},
                {40, 50, 60},
                {70, 80, 90}
        };

        int n = matriz.length;
        int[][] rotacionada = new int [n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rotacionada[j][n - 1 - i] = matriz[i][j];
            }
        }
        System.out.println("Matriz rotacionada 90 graus: ");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(rotacionada[i][j] + " ");
            }
            System.out.println();
        }
    }
}