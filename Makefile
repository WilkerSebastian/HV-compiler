# Variáveis do compilador
CXX = clang++
CXXFLAGS = -std=c++17 -Wall -Iinclude

# Diretórios
SRCDIR = src
INCDIR = include
BINDIR = bin

# Encontrar todos os arquivos .cpp recursivamente
SRCS := $(shell find $(SRCDIR) -name '*.cpp')

# Gerar lista de objetos a partir dos arquivos .cpp
OBJS := $(patsubst $(SRCDIR)/%.cpp,$(BINDIR)/%.o,$(SRCS))

# Nome do executável
TARGET = $(BINDIR)/hvc

# Regra padrão
all: $(TARGET)

# Regra para criar o executável
$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) $^ -o $@

# Regra para compilar os objetos
$(BINDIR)/%.o: $(SRCDIR)/%.cpp
	@mkdir -p $(dir $@)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Remove arquivos temporários
clean:
	rm -rf $(BINDIR)/*

# Faz a recompilação do zero
rebuild: clean all

# Define as regras que não são arquivos
.PHONY: all clean rebuild
