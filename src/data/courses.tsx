import React from 'react';
import { Course } from '../types';
import CodeBlock from '../components/CodeBlock';

// Discord.js lessons content
const preparationDiscordJsContent = (
  <div>
    <p className="mb-4">
      Bienvenue dans ce cours complet sur Discord.js ! Nous allons vous guider pas à pas dans la création de votre bot Discord, en commençant par la préparation de votre environnement de développement.
    </p>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Prérequis</h2>
    <p className="mb-4">
      Pour tirer le meilleur parti de ce cours, assurez-vous d'avoir :
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>Node.js (version 16.11.0 ou supérieure)</li>
      <li>npm (inclus avec Node.js)</li>
      <li>Un éditeur de code (Visual Studio Code recommandé)</li>
      <li>Des connaissances de base en JavaScript</li>
      <li>Un compte Discord</li>
    </ul>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Installation de Node.js</h2>
    <p className="mb-4">
      Node.js est l'environnement d'exécution qui permet d'exécuter du JavaScript côté serveur, essentiel pour notre bot Discord.
    </p>
    <ol className="list-decimal pl-6 mb-6 space-y-2">
      <li>Rendez-vous sur <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-discord-blurple hover:underline">le site officiel de Node.js</a></li>
      <li>Téléchargez la version LTS (Long Term Support)</li>
      <li>Lancez l'installateur et suivez les étapes</li>
      <li>Assurez-vous que l'option "Add to PATH" est cochée</li>
    </ol>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Configuration de l'éditeur de code</h2>
    <p className="mb-4">
      Visual Studio Code est recommandé pour ce cours. Voici les extensions utiles à installer :
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>ESLint - Pour la détection des erreurs de code</li>
      <li>Prettier - Pour le formatage automatique du code</li>
      <li>Discord.js Snippets - Pour l'autocomplétion Discord.js</li>
      <li>GitLens - Pour une meilleure intégration avec Git</li>
    </ul>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Vérification de l'installation</h2>
    <p className="mb-4">
      Ouvrez un terminal et vérifiez vos installations :
    </p>

    <CodeBlock 
      language="bash"
      code="node -v\nnpm -v"
    />
    
    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
      <p className="text-green-700">
        <strong>Conseil pro :</strong> Utilisez nvm (Node Version Manager) pour gérer facilement plusieurs versions de Node.js sur votre système.
      </p>
    </div>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Configuration du compte développeur Discord</h2>
    <p className="mb-4">
      La création d'un bot nécessite un compte développeur Discord :
    </p>
    <ol className="list-decimal pl-6 mb-6 space-y-2">
      <li>Connectez-vous à <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="text-discord-blurple hover:underline">Discord</a></li>
      <li>Accédez au <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer" className="text-discord-blurple hover:underline">portail développeur</a></li>
      <li>Activez le mode développeur dans Discord (Paramètres {'>'} Avancés {'>'} Mode développeur)</li>
    </ol>
    
    <div className="bg-blue-50 border-l-4 border-discord-blurple p-4 mt-6">
      <p className="text-blue-800">
        <strong>Note importante :</strong> Le mode développeur vous donne accès à des fonctionnalités avancées comme la copie des IDs, essentielle pour le développement de bots.
      </p>
    </div>
  </div>
);

const createBotDiscordJsContent = (
  <div>
    <p className="mb-4">
      Dans cette leçon, nous allons créer notre première application Discord et configurer notre bot avec les meilleures pratiques.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-4">Création de l'application Discord</h2>
    <ol className="list-decimal pl-6 mb-6 space-y-2">
      <li>Accédez au <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer" className="text-discord-blurple hover:underline">portail développeur</a></li>
      <li>Cliquez sur "New Application"</li>
      <li>Choisissez un nom significatif pour votre bot</li>
      <li>Dans la section "Bot", cliquez sur "Add Bot"</li>
      <li>Configurez l'avatar et le nom public du bot</li>
      <li>Activez les "Privileged Gateway Intents" nécessaires</li>
    </ol>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
      <p className="text-yellow-800">
        <strong>Sécurité :</strong> Ne partagez JAMAIS votre token de bot. Si compromis, régénérez-le immédiatement dans le portail développeur.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-8 mb-4">Structure du projet</h2>
    <p className="mb-4">
      Organisons notre projet avec une structure professionnelle :
    </p>

    <CodeBlock 
      language="bash"
      code={`mkdir mon-bot-discord
cd mon-bot-discord
npm init -y
npm install discord.js dotenv`}
    />

    <p className="mt-4 mb-2">Structure recommandée des dossiers :</p>
    <CodeBlock 
      language="plaintext"
      code={`mon-bot-discord/
├── src/
│   ├── commands/
│   ├── events/
│   ├── utils/
│   └── index.js
├── config/
│   └── config.js
├── .env
├── .gitignore
└── package.json`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Configuration initiale</h2>
    <p className="mb-4">Créez un fichier .env pour les variables d'environnement :</p>

    <CodeBlock 
      language="plaintext"
      filename=".env"
      code="TOKEN=votre-token-ici
CLIENT_ID=id-de-votre-application
GUILD_ID=id-de-votre-serveur-test"
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Code de base du bot</h2>
    <p className="mb-4">
      Voici une configuration professionnelle pour démarrer :
    </p>

    <CodeBlock 
      language="javascript"
      filename="src/index.js"
      code={`require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

// Collections pour stocker les commandes et événements
client.commands = new Collection();
client.cooldowns = new Collection();

// Gestion des erreurs
process.on('unhandledRejection', error => {
  console.error('Erreur non gérée:', error);
});

client.once('ready', () => {
  console.log(\`Bot connecté en tant que \${client.user.tag}\`);
  client.user.setActivity('vous aider', { type: 'PLAYING' });
});

// Connexion avec gestion d'erreur
client.login(process.env.TOKEN).catch(error => {
  console.error('Erreur de connexion:', error);
  process.exit(1);
});`}
    />

    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
      <p className="text-purple-800">
        <strong>Bonnes pratiques :</strong>
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Utilisez des variables d'environnement pour les données sensibles</li>
        <li>Implémentez une gestion appropriée des erreurs</li>
        <li>Organisez votre code en modules réutilisables</li>
        <li>Commentez les parties importantes du code</li>
      </ul>
    </div>
  </div>
);

const commandsDiscordJsContent = (
  <div>
    <p className="mb-4">
      Apprenez à créer et gérer des commandes slash (/) dans votre bot Discord.js.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-4">Structure des commandes</h2>
    <p className="mb-4">
      Créons un système de commandes modulaire et maintenable :
    </p>

    <CodeBlock 
      language="javascript"
      filename="src/commands/ping.js"
      code={`const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond avec Pong!'),
    
  async execute(interaction) {
    const sent = await interaction.reply({ 
      content: 'Calcul de la latence...', 
      fetchReply: true 
    });
    
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);
    
    await interaction.editReply({
      content: \`Pong! 🏓\nLatence: \${latency}ms\nLatence API: \${apiLatency}ms\`
    });
  },
};`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Gestionnaire de commandes</h2>
    <p className="mb-4">
      Créez un système pour charger automatiquement les commandes :
    </p>

    <CodeBlock 
      language="javascript"
      filename="src/handlers/commandHandler.js"
      code={`const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

module.exports = async (client) => {
  const commands = [];
  const commandsPath = path.join(__dirname, '../commands');
  
  // Lecture des fichiers de commandes
  const commandFiles = fs.readdirSync(commandsPath)
    .filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }

  // Enregistrement des commandes
  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

  try {
    console.log('Actualisation des commandes (/)...');
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log('Commandes (/) enregistrées avec succès!');
  } catch (error) {
    console.error('Erreur:', error);
  }
};`}
    />

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p className="text-blue-800">
        <strong>Astuce :</strong> Utilisez des sous-commandes pour organiser des fonctionnalités complexes sous une seule commande principale.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-8 mb-4">Gestion des interactions</h2>
    <p className="mb-4">
      Ajoutez un gestionnaire d'événements pour les interactions :
    </p>

    <CodeBlock 
      language="javascript"
      filename="src/events/interactionCreate.js"
      code={`module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        content: 'Une erreur est survenue lors de l\'exécution de la commande.',
        ephemeral: true
      };
      
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(errorMessage);
      } else {
        await interaction.reply(errorMessage);
      }
    }
  },
};`}
    />
  </div>
);

// Additional Discord.js lessons
const eventsDiscordJsContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Gestion des événements Discord</h2>
    <p className="mb-4">
      Les événements sont au cœur de Discord.js. Ils permettent à votre bot de réagir aux actions des utilisateurs et aux changements dans les serveurs.
    </p>

    <CodeBlock
      language="javascript"
      filename="src/events/messageCreate.js"
      code={`module.exports = {
  name: 'messageCreate',
  async execute(message) {
    // Ignore les messages des bots
    if (message.author.bot) return;
    
    // Exemple de réponse à un mot clé
    if (message.content.toLowerCase().includes('bonjour')) {
      await message.reply('Bonjour! Comment puis-je vous aider?');
    }
  }
};`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Système de chargement d'événements</h2>
    <CodeBlock
      language="javascript"
      filename="src/handlers/eventHandler.js"
      code={`const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const eventsPath = path.join(__dirname, '../events');
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    const event = require(path.join(eventsPath, file));
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};`}
    />
  </div>
);

const databaseDiscordJsContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Intégration d'une base de données</h2>
    <p className="mb-4">
      Apprenez à persister les données de votre bot avec une base de données.
    </p>

    <CodeBlock
      language="javascript"
      filename="src/database/index.js"
      code={`const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = supabase;`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Exemple d'utilisation</h2>
    <CodeBlock
      language="javascript"
      filename="src/commands/profile.js"
      code={`const { SlashCommandBuilder } = require('discord.js');
const supabase = require('../database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Affiche ou crée votre profil'),

  async execute(interaction) {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('discord_id', interaction.user.id)
      .single();

    if (error) {
      console.error('Erreur de base de données:', error);
      return interaction.reply({
        content: 'Une erreur est survenue lors de la récupération de votre profil.',
        ephemeral: true
      });
    }

    if (!data) {
      // Créer un nouveau profil
      const { error: insertError } = await supabase
        .from('profiles')
        .insert([
          {
            discord_id: interaction.user.id,
            username: interaction.user.username,
            created_at: new Date()
          }
        ]);

      if (insertError) {
        console.error('Erreur de création de profil:', insertError);
        return interaction.reply({
          content: 'Une erreur est survenue lors de la création de votre profil.',
          ephemeral: true
        });
      }

      return interaction.reply({
        content: 'Votre profil a été créé avec succès!',
        ephemeral: true
      });
    }

    // Afficher le profil existant
    return interaction.reply({
      content: \`Profil de \${data.username}:\nCréé le: \${new Date(data.created_at).toLocaleDateString()}\`,
      ephemeral: true
    });
  },
};`}
    />
  </div>
);

const embedsDiscordJsContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Création d'embeds riches</h2>
    <p className="mb-4">
      Les embeds permettent de créer des messages enrichis et attractifs.
    </p>

    <CodeBlock
      language="javascript"
      filename="src/commands/serverinfo.js"
      code={`const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Affiche les informations du serveur'),

  async execute(interaction) {
    const guild = interaction.guild;
    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle(guild.name)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: 'Propriétaire', value: \`<@\${guild.ownerId}>\`, inline: true },
        { name: 'Membres', value: \`\${guild.memberCount}\`, inline: true },
        { name: 'Salons', value: \`\${guild.channels.cache.size}\`, inline: true },
        { name: 'Rôles', value: \`\${guild.roles.cache.size}\`, inline: true },
        { name: 'Créé le', value: \`\${guild.createdAt.toLocaleDateString()}\`, inline: true }
      )
      .setFooter({ text: \`ID: \${guild.id}\` });

    await interaction.reply({ embeds: [embed] });
  },
};`}
    />
  </div>
);

const moderationDiscordJsContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Commandes de modération</h2>
    <p className="mb-4">
      Implémentez des fonctionnalités de modération essentielles pour votre serveur.
    </p>

    <CodeBlock
      language="javascript"
      filename="src/commands/kick.js"
      code={`const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Expulse un membre du serveur')
    .addUserOption(option =>
      option
        .setName('utilisateur')
        .setDescription('L\'utilisateur à expulser')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('raison')
        .setDescription('La raison de l\'expulsion')
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  async execute(interaction) {
    const target = interaction.options.getMember('utilisateur');
    const reason = interaction.options.getString('raison') ?? 'Aucune raison fournie';

    if (!target) {
      return interaction.reply({
        content: 'Utilisateur non trouvé.',
        ephemeral: true
      });
    }

    if (!target.kickable) {
      return interaction.reply({
        content: 'Je ne peux pas expulser cet utilisateur.',
        ephemeral: true
      });
    }

    try {
      await target.kick(reason);
      await interaction.reply({
        content: \`\${target.user.tag} a été expulsé.\nRaison: \${reason}\`,
        ephemeral: true
      });
    } catch (error) {
      console.error('Erreur lors de l\'expulsion:', error);
      await interaction.reply({
        content: 'Une erreur est survenue lors de l\'expulsion.',
        ephemeral: true
      });
    }
  },
};`}
    />
  </div>
);

// Discord.py content
const preparationDiscordPyContent = (
  <div>
    <p className="mb-4">
      Bienvenue dans ce cours approfondi sur discord.py ! Nous allons vous guider dans la création d'un bot Discord en Python.
    </p>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Prérequis</h2>
    <p className="mb-4">
      Pour suivre ce cours efficacement, vous aurez besoin de :
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>Python 3.8 ou supérieur</li>
      <li>pip (gestionnaire de paquets Python)</li>
      <li>Un environnement virtuel Python (venv)</li>
      <li>Un éditeur de code (Visual Studio Code recommandé)</li>
      <li>Des connaissances de base en Python</li>
      <li>Un compte Discord</li>
    </ul>
    
    <h2 className="text-2xl font-bold mt-8 mb-4">Installation de Python</h2>
    <p className="mb-4">
      Suivez ces étapes pour installer Python correctement :
    </p>
    <ol className="list-decimal pl-6 mb-6 space-y-2">
      <li>Visitez <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-discord-blurple hover:underline">python.org</a></li>
      <li>Téléchargez la dernière version stable de Python 3</li>
      <li>Pendant l'installation, cochez :
        <ul className="list-disc pl-6 mt-2">
          <li>Add Python to PATH</li>
          <li>Install pip</li>
          <li>Install for all users (recommandé)</li>
        </ul>
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-8 mb-4">Configuration de l'environnement</h2>
    <p className="mb-4">
      Créez un environnement virtuel pour isoler les dépendances :
    </p>

    <CodeBlock 
      language="bash"
      code={`python -m venv venv
# Sur Windows
venv\\Scripts\\activate
# Sur macOS/Linux
source venv/bin/activate`}
    />

    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
      <p className="text-green-700">
        <strong>Bonne pratique :</strong> Utilisez toujours un environnement virtuel pour chaque projet Python. Cela évite les conflits entre les dépendances de différents projets.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-8 mb-4">Installation des outils de développement</h2>
    <p className="mb-4">
      Installez ces extensions VS Code pour un développement Python optimal :
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>Python (Microsoft)</li>
      <li>Pylance</li>
      <li>Python Docstring Generator</li>
      <li>Python Test Explorer</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 mb-4">Vérification finale</h2>
    <p className="mb-4">
      Vérifiez votre installation avec ces commandes :
    </p>

    <CodeBlock 
      language="bash"
      code={`python --version
pip --version
pip list`}
    />
  </div>
);

const createBotDiscordPyContent = (
  <div>
    <p className="mb-4">
      Apprenez à créer et configurer votre premier bot Discord avec discord.py.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-4">Installation de discord.py</h2>
    <p className="mb-4">
      Commencez par installer la bibliothèque discord.py :
    </p>

    <CodeBlock 
      language="bash"
      code="pip install discord.py python-dotenv"
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Structure du projet</h2>
    <p className="mb-4">Organisation recommandée des fichiers :</p>

    <CodeBlock 
      language="plaintext"
      code={`mon-bot/
├── src/
│   ├── cogs/
│   ├── utils/
│   └── bot.py
├── config.py
├── .env
└── requirements.txt`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Configuration du bot</h2>
    <p className="mb-4">Créez le fichier principal du bot :</p>

    <CodeBlock 
      language="python"
      filename="src/bot.py"
      code={`import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

# Chargement des variables d'environnement
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

# Configuration des intents
intents = discord.Intents.default()
intents.message_content = True
intents.members = True

# Création du bot
bot = commands.Bot(
    command_prefix='!',
    intents=intents,
    help_command=None  # Désactive la commande d'aide par défaut
)

@bot.event
async def on_ready():
    print(f'{bot.user} est connecté aux serveurs suivants:')
    for guild in bot.guilds:
        print(f'- {guild.name} (id: {guild.id})')
    
    # Définir le statut du bot
    await bot.change_presence(
        activity=discord.Activity(
            type=discord.ActivityType.watching,
            name='vos commandes'
        )
    )

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.CommandNotFound):
        await ctx.send("❌ Commande inconnue.")
    elif isinstance(error, commands.MissingPermissions):
        await ctx.send("⛔ Vous n'avez pas les permissions nécessaires.")
    else:
        print(f'Erreur non gérée: {error}')

# Lancement du bot
bot.run(TOKEN)`}
    />

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
      <p className="text-yellow-800">
        <strong>Sécurité :</strong> Stockez toujours votre token dans un fichier .env et ajoutez .env à votre .gitignore.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-8 mb-4">Fichier de configuration</h2>
    <p className="mb-4">Créez un fichier .env pour les variables sensibles :</p>

    <CodeBlock 
      language="plaintext"
      filename=".env"
      code="DISCORD_TOKEN=votre-token-ici
GUILD_ID=id-de-votre-serveur"
    />

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Conseil :</strong> Utilisez des Cogs pour organiser votre code en modules. Cela rendra votre bot plus facile à maintenir et à étendre.
      </p>
    </div>
  </div>
);

const cogsDiscordPyContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Organisation avec les Cogs</h2>
    <p className="mb-4">
      Les Cogs sont un moyen puissant d'organiser votre code en modules réutilisables.
    </p>

    <CodeBlock
      language="python"
      filename="src/cogs/mo

deration.py"
      code={`import discord
from discord.ext import commands

class Moderation(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    @commands.has_permissions(kick_members=True)
    async def kick(self, ctx, member: discord.Member, *, reason=None):
        """Expulse un membre du serveur"""
        try:
            await member.kick(reason=reason)
            await ctx.send(f'✅ {member.name} a été expulsé.')
        except discord.Forbidden:
            await ctx.send("❌ Je n'ai pas la permission d'expulser ce membre.")
        except Exception as e:
            await ctx.send(f"❌ Une erreur est survenue: {str(e)}")

    @commands.command()
    @commands.has_permissions(ban_members=True)
    async def ban(self, ctx, member: discord.Member, *, reason=None):
        """Bannit un membre du serveur"""
        try:
            await member.ban(reason=reason)
            await ctx.send(f'🔨 {member.name} a été banni.')
        except discord.Forbidden:
            await ctx.send("❌ Je n'ai pas la permission de bannir ce membre.")
        except Exception as e:
            await ctx.send(f"❌ Une erreur est survenue: {str(e)}")

async def setup(bot):
    await bot.add_cog(Moderation(bot))`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Chargement des Cogs</h2>
    <p className="mb-4">
      Ajoutez ce code dans votre fichier principal pour charger les Cogs :
    </p>

    <CodeBlock
      language="python"
      filename="src/bot.py"
      code={`import os
import discord
from discord.ext import commands

# ... (code précédent) ...

# Chargement des Cogs
async def load_extensions():
    for filename in os.listdir('./cogs'):
        if filename.endswith('.py'):
            try:
                await bot.load_extension(f'cogs.{filename[:-3]}')
                print(f'Extension chargée: {filename}')
            except Exception as e:
                print(f'Erreur lors du chargement de {filename}: {str(e)}')

async def main():
    async with bot:
        await load_extensions()
        await bot.start(TOKEN)

# Lancement du bot
import asyncio
asyncio.run(main())`}
    />
  </div>
);

const eventsDiscordPyContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Gestion des événements</h2>
    <p className="mb-4">
      Apprenez à réagir aux événements Discord avec discord.py.
    </p>

    <CodeBlock
      language="python"
      filename="src/cogs/events.py"
      code={`import discord
from discord.ext import commands

class Events(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_member_join(self, member):
        """Accueille les nouveaux membres"""
        channel = member.guild.system_channel
        if channel:
            embed = discord.Embed(
                title="Nouveau membre!",
                description=f"Bienvenue {member.mention} sur {member.guild.name}!",
                color=discord.Color.green()
            )
            embed.set_thumbnail(url=member.avatar.url if member.avatar else member.default_avatar.url)
            await channel.send(embed=embed)

    @commands.Cog.listener()
    async def on_message(self, message):
        """Réagit aux messages"""
        if message.author.bot:
            return

        # Exemple de réponse à des mots clés
        if "bonjour" in message.content.lower():
            await message.channel.send(f"Bonjour {message.author.mention}!")

    @commands.Cog.listener()
    async def on_command_error(self, ctx, error):
        """Gestion globale des erreurs de commandes"""
        if isinstance(error, commands.MissingPermissions):
            await ctx.send("❌ Vous n'avez pas les permissions nécessaires.")
        elif isinstance(error, commands.MissingRequiredArgument):
            await ctx.send("❌ Il manque des arguments à cette commande.")
        else:
            await ctx.send(f"❌ Une erreur est survenue: {str(error)}")

async def setup(bot):
    await bot.add_cog(Events(bot))`}
    />
  </div>
);

const databaseDiscordPyContent = (
  <div>
    <h2 className="text-2xl font-bold mb-4">Intégration d'une base de données</h2>
    <p className="mb-4">
      Utilisez SQLAlchemy pour gérer une base de données avec votre bot.
    </p>

    <CodeBlock
      language="python"
      filename="src/utils/db.py"
      code={`from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    discord_id = Column(String, unique=True)
    username = Column(String)
    points = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

# Création de la connexion
engine = create_engine('sqlite:///bot.db')
Base.metadata.create_all(engine)

# Création de la session
Session = sessionmaker(bind=engine)
session = Session()`}
    />

    <h2 className="text-2xl font-bold mt-8 mb-4">Utilisation de la base de données</h2>
    <CodeBlock
      language="python"
      filename="src/cogs/profile.py"
      code={`import discord
from discord.ext import commands
from utils.db import User, session

class Profile(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def profile(self, ctx):
        """Affiche le profil de l'utilisateur"""
        # Recherche de l'utilisateur dans la base de données
        user = session.query(User).filter_by(discord_id=str(ctx.author.id)).first()

        if not user:
            # Création d'un nouveau profil
            user = User(
                discord_id=str(ctx.author.id),
                username=ctx.author.name
            )
            session.add(user)
            session.commit()

        # Création de l'embed
        embed = discord.Embed(
            title=f"Profil de {ctx.author.name}",
            color=discord.Color.blue()
        )
        embed.add_field(name="Points", value=user.points)
        embed.add_field(name="Membre depuis", value=user.created_at.strftime("%d/%m/%Y"))
        embed.set_thumbnail(url=ctx.author.avatar.url if ctx.author.avatar else ctx.author.default_avatar.url)

        await ctx.send(embed=embed)

    @commands.command()
    async def addpoints(self, ctx, member: discord.Member, points: int):
        """Ajoute des points à un utilisateur"""
        if not ctx.author.guild_permissions.administrator:
            return await ctx.send("❌ Vous n'avez pas la permission d'utiliser cette commande.")

        user = session.query(User).filter_by(discord_id=str(member.id)).first()
        if user:
            user.points += points
            session.commit()
            await ctx.send(f"✅ {points} points ajoutés à {member.name}")
        else:
            await ctx.send("❌ Utilisateur non trouvé dans la base de données.")

async def setup(bot):
    await bot.add_cog(Profile(bot))`}
    />
  </div>
);

// Construction des cours
export const discordJsCourse: Course = {
  id: 'discord.js',
  title: 'Discord.js (JavaScript)',
  description: 'Maîtrisez la création de bots Discord avec JavaScript et Discord.js v14',
  icon: 'JS',
  chapters: [
    {
      id: 'installation',
      title: 'Installation et configuration',
      lessons: [
        {
          id: 'preparation',
          title: 'Préparation de l\'environnement',
          content: preparationDiscordJsContent
        },
        {
          id: 'creation-bot',
          title: 'Création du bot',
          content: createBotDiscordJsContent
        }
      ]
    },
    {
      id: 'commandes',
      title: 'Gestion des commandes',
      lessons: [
        {
          id: 'slash-commands',
          title: 'Commandes slash (/)',
          content: commandsDiscordJsContent
        }
      ]
    },
    {
      id: 'evenements',
      title: 'Gestion des événements',
      lessons: [
        {
          id: 'events-base',
          title: 'Les événements de base',
          content: eventsDiscordJsContent
        }
      ]
    },
    {
      id: 'database',
      title: 'Base de données',
      lessons: [
        {
          id: 'database-setup',
          title: 'Configuration de la base de données',
          content: databaseDiscordJsContent
        }
      ]
    },
    {
      id: 'embeds',
      title: 'Messages enrichis',
      lessons: [
        {
          id: 'embeds-creation',
          title: 'Création d\'embeds',
          content: embedsDiscordJsContent
        }
      ]
    },
    {
      id: 'moderation',
      title: 'Modération',
      lessons: [
        {
          id: 'moderation-commands',
          title: 'Commandes de modération',
          content: moderationDiscordJsContent
        }
      ]
    }
  ]
};

export const discordPyCourse: Course = {
  id: 'discord.py',
  title: 'discord.py (Python)',
  description: 'Créez des bots Discord puissants avec Python et discord.py',
  icon: 'PY',
  chapters: [
    {
      id: 'installation',
      title: 'Installation et configuration',
      lessons: [
        {
          id: 'preparation',
          title: 'Préparation de l\'environnement',
          content: preparationDiscordPyContent
        },
        {
          id: 'creation-bot',
          title: 'Création du bot',
          content: createBotDiscordPyContent
        }
      ]
    },
    {
      id: 'cogs',
      title: 'Organisation avec les Cogs',
      lessons: [
        {
          id: 'cogs-intro',
          title: 'Introduction aux Cogs',
          content: cogsDiscordPyContent
        }
      ]
    },
    {
      id: 'evenements',
      title: 'Gestion des événements',
      lessons: [
        {
          id: 'events-base',
          title: 'Les événements de base',
          content: eventsDiscordPyContent
        }
      ]
    },
    {
      id: 'database',
      title: 'Base de données',
      lessons: [
        {
          id: 'database-setup',
          title: 'Configuration de la base de données',
          content: databaseDiscordPyContent
        }
      ]
    }
  ]
};