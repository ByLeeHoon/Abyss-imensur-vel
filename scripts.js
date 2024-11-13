<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Fichas de RPG</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.25.2/dist/umd/supabase.min.js"></script>
</head>
<body>
    <header>
        <h1>Gerador de Fichas de RPG</h1>
    </header>
    <main>
        <div class="toolbar">
            <button id="new-character-btn">Nova Ficha</button>
            <input type="text" id="search-bar" placeholder="Buscar">
        </div>
        <div id="character-creation" style="display: none;">
            <nav>
                <ul>
                    <li><a href="#" onclick="showSection('attributes')">Atributos</a></li>
                    <li><a href="#" onclick="showSection('origin')">Origem</a></li>
                    <li><a href="#" onclick="showSection('class')">Classe</a></li>
                    <li><a href="#" onclick="showSection('final-touches')">Toques Finais</a></li>
                </ul>
            </nav>
            <div id="attributes" class="creation-section">
                <h2>Atributos</h2>
                <p>Distribua seus pontos de atributos (total inicial: 4).</p>
                <div class="attribute">
                    <label>Agilidade (AGI): </label>
                    <input type="number" id="agi" value="1" min="0" max="3">
                </div>
                <div class="attribute">
                    <label>Força (FOR): </label>
                    <input type="number" id="for" value="1" min="0" max="3">
                </div>
                <div class="attribute">
                    <label>Intelecto (INT): </label>
                    <input type="number" id="int" value="1" min="0" max="3">
                </div>
                <div class="attribute">
                    <label>Presença (PRE): </label>
                    <input type="number" id="pre" value="1" min="0" max="3">
                </div>
                <div class="attribute">
                    <label>Vigor (VIG): </label>
                    <input type="number" id="vig" value="1" min="0" max="3">
                </div>
            </div>
            <div id="origin" class="creation-section" style="display: none;">
                <h2>Origem</h2>
                <!-- Adicione campos para origem do personagem -->
            </div>
            <div id="class" class="creation-section" style="display: none;">
                <h2>Classe</h2>
                <!-- Adicione campos para classe do personagem -->
            </div>
            <div id="final-touches" class="creation-section" style="display: none;">
                <h2>Toques Finais</h2>
                <!-- Adicione campos para toques finais do personagem -->
                <button id="save-character-btn">Salvar Ficha</button>
            </div>
        </div>
        <div id="saved-characters">
            <h2>Fichas Salvas</h2>
        </div>
    </main>
    <footer>
        <p>© 2024 Seu Nome</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
