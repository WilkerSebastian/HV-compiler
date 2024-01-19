#pragma once

#include <string>

class Syntax {
    public:
        virtual Token lexer(const std::string& script) = 0;
};
