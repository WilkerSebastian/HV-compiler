#pragma once

class EPI {
    private:
        int valor = 0;

    public:
        void registrar(int registro);
        int lerRegistro() const;
};