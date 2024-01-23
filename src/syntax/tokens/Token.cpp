#include "syntax/tokens/Token.hpp"

Token::Token(const std::string& type, int value) : type(type), value(value) {}

std::string Token::getType() const {
    return type;
}

int Token::getValue() const {
    return value;
}