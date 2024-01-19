#include "syntax/language/DrawerLanguage.hpp"
#include <sstream>
#include <regex>
#include <stdexcept>

Token DrawerLanguage::lexer(const std::string& script) {

    Token token("", 0);

    bool end = false;
    std::istringstream iss(script);
    std::string word;

    while (iss >> word) 

        if (!end) 

            if (std::regex_match(word, std::regex("^000$"))) {
                end = true;
                token = Token("000", 0);
            } else if (std::regex_match(word, std::regex("^0[0-9]{2}$"))) 
                token = Token("0EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^1[0-9]{2}$"))) 
                token = Token("1EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^2[0-9]{2}$"))) 
                token = Token("2EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^3[0-9]{2}$"))) 
                token = Token("3EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^4[0-9]{2}$"))) 
                token = Token("4EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^5[0-9]{2}$"))) 
                token = Token("5EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^6[0-9]{2}$"))) 
                token = Token("6EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^7[0-9]{2}$"))) 
                token = Token("7EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^8[0-9]{2}$"))) 
                token = Token("8EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^9[0-9]{2}$"))) 
                token = Token("9EE", std::stoi(word.substr(1, 2)));

            else if (std::regex_match(word, std::regex("^0-[0-9]{1,3}$"))) 
                token = Token("0-N", std::stoi(word.substr(word.find_last_of('-') + 1)));

            else 
                throw std::runtime_error("Erro de sintaxe, instrução " + word + " não é conhecida!");
            
        else 
            if (std::regex_match(word, std::regex("^[0-9]{3}$"))) 
                token = Token("DATA", std::stoi(word));

            else
                throw std::runtime_error("Erro de sintaxe, dado " + word + " não é válido!");
            
    

    return token;
}
