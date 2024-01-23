#pragma once

#include "syntax/Syntax.hpp"
#include "syntax/tokens/Token.hpp"
#include <string>

class DrawerLanguage : public Syntax {
    public:
        Token lexer(const std::string& script) override;
};
