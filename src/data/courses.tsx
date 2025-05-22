import React from 'react';
import { Course } from '../types';
import CodeBlock from '../components/CodeBlock';

const generateDiscordJsContent = (lessonNumber: number) => {
  const contents = {
    1: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction à Discord.js</h2>
        <p className="mb-4">
          Discord.js est une puissante bibliothèque Node.js qui permet de créer des bots Discord. Dans cette leçon, nous allons apprendre les bases et configurer notre environnement de développement.
        </p>
        
        <h3 className="text-xl font-bold mb-3">Prérequis</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Node.js 16.9.0 ou supérieur</li>
          <li>Un éditeur de code (VS Code recommandé)</li>
          <li>Des connaissances de base en JavaScript</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Installation</h3>
        <CodeBlock 
          language="bash"
          code={`npm init -y
npm install discord.js`}
          filename="Terminal"
        />

        <h3 className="text-xl font-bold mb-3">Code de base</h3>
        <CodeBlock 
          language="javascript"
          code={`const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.login('your-token-here');`}
          filename="index.js"
        />
      </div>
    ),
    2: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Commandes Slash avec Discord.js</h2>
        <p className="mb-4">
          Les commandes slash sont la méthode moderne et recommandée pour créer des commandes de bot Discord. Apprenons à les implémenter.
        </p>

        <h3 className="text-xl font-bold mb-3">Création d'une commande slash</h3>
        <CodeBlock 
          language="javascript"
          code={`const { SlashCommandBuilder } = require('discord.js');

const pingCommand = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Répond avec Pong!');

// Enregistrement de la commande
await rest.put(
  Routes.applicationCommands(CLIENT_ID),
  { body: [pingCommand.toJSON()] },
);`}
          filename="commands/ping.js"
        />

        <h3 className="text-xl font-bold mb-3">Gestion des interactions</h3>
        <CodeBlock 
          language="javascript"
          code={`client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});`}
          filename="index.js"
        />
      </div>
    ),
    3: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Gestion des événements Discord</h2>
        <p className="mb-4">
          Les événements sont au cœur de Discord.js. Ils nous permettent de réagir aux actions des utilisateurs et aux changements sur le serveur.
        </p>

        <h3 className="text-xl font-bold mb-3">Événements principaux</h3>
        <CodeBlock 
          language="javascript"
          code={`client.on('messageCreate', message => {
  if (message.author.bot) return;
  console.log(\`Message reçu: \${message.content}\`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.name === 'bienvenue'
  );
  if (!channel) return;
  
  channel.send(\`Bienvenue \${member}!\`);
});`}
          filename="events/main.js"
        />
      </div>
    )
  };

  return contents[lessonNumber] || (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fonctionnalités avancées de Discord.js</h2>
      <p className="mb-4">
        Cette leçon couvre des concepts avancés de Discord.js pour créer des bots plus sophistiqués.
      </p>
      
      <CodeBlock 
        language="javascript"
        code={`// Exemple de code avancé
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const button = new ButtonBuilder()
  .setCustomId('primary')
  .setLabel('Cliquez-moi!')
  .setStyle(ButtonStyle.Primary);

const row = new ActionRowBuilder().addComponents(button);

await interaction.reply({
  content: 'Un bouton interactif!',
  components: [row]
});`}
      />
    </div>
  );
};

const generateDiscordPyContent = (lessonNumber: number) => {
  const contents = {
    1: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction à discord.py</h2>
        <p className="mb-4">
          discord.py est une bibliothèque Python moderne pour créer des bots Discord. Commençons par les bases.
        </p>

        <h3 className="text-xl font-bold mb-3">Prérequis</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Python 3.8 ou supérieur</li>
          <li>pip (gestionnaire de paquets Python)</li>
          <li>Un éditeur de code</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Installation</h3>
        <CodeBlock 
          language="bash"
          code={`pip install discord.py`}
          filename="Terminal"
        />

        <h3 className="text-xl font-bold mb-3">Code de base</h3>
        <CodeBlock 
          language="python"
          code={`import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'{bot.user} est connecté!')

bot.run('your-token-here')`}
          filename="bot.py"
        />
      </div>
    ),
    2: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Commandes avec discord.py</h2>
        <p className="mb-4">
          Apprenons à créer des commandes personnalisées avec discord.py.
        </p>

        <h3 className="text-xl font-bold mb-3">Création de commandes</h3>
        <CodeBlock 
          language="python"
          code={`@bot.command()
async def ping(ctx):
    await ctx.send(f'Pong! {round(bot.latency * 1000)}ms')

@bot.command()
async def hello(ctx, *, name=""):
    if name:
        await ctx.send(f'Bonjour, {name}!')
    else:
        await ctx.send('Bonjour!')`}
          filename="commands.py"
        />
      </div>
    ),
    3: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Gestion des événements avec discord.py</h2>
        <p className="mb-4">
          Les événements nous permettent de réagir aux actions des utilisateurs sur le serveur.
        </p>

        <h3 className="text-xl font-bold mb-3">Événements courants</h3>
        <CodeBlock 
          language="python"
          code={`@bot.event
async def on_message(message):
    if message.author == bot.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Bonjour!')

    await bot.process_commands(message)

@bot.event
async def on_member_join(member):
    channel = discord.utils.get(
        member.guild.channels, 
        name='bienvenue'
    )
    if channel:
        await channel.send(
            f'Bienvenue {member.mention}!'
        )`}
          filename="events.py"
        />
      </div>
    )
  };

  return contents[lessonNumber] || (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fonctionnalités avancées de discord.py</h2>
      <p className="mb-4">
        Cette leçon couvre des concepts avancés pour créer des bots plus sophistiqués avec discord.py.
      </p>
      
      <CodeBlock 
        language="python"
        code={`# Exemple de code avancé
from discord.ui import Button, View

class MyView(View):
    @discord.ui.button(label='Cliquez-moi!', style=discord.ButtonStyle.primary)
    async def button_callback(self, button, interaction):
        await interaction.response.send_message('Bouton cliqué!')

@bot.command()
async def button(ctx):
    view = MyView()
    await ctx.send('Un bouton interactif!', view=view)`}
      />
    </div>
  );
};

const generateChaptersAndLessons = (isJavaScript: boolean) => {
  const chapters = [
    {
      id: 'getting-started',
      title: isJavaScript 
        ? 'Débuter avec Discord.js'
        : 'Débuter avec discord.py',
      lessons: [
        {
          id: 'introduction',
          title: 'Introduction et installation',
          content: isJavaScript ? generateDiscordJsContent(1) : generateDiscordPyContent(1)
        },
        {
          id: 'first-bot',
          title: 'Créer son premier bot',
          content: isJavaScript ? generateDiscordJsContent(2) : generateDiscordPyContent(2)
        }
      ]
    },
    {
      id: 'commands',
      title: 'Gestion des commandes',
      lessons: [
        {
          id: 'basic-commands',
          title: isJavaScript ? 'Commandes Slash' : 'Commandes de base',
          content: isJavaScript ? generateDiscordJsContent(3) : generateDiscordPyContent(3)
        }
      ]
    }
  ];

  // Generate additional chapters and lessons
  for (let i = 2; i < 5; i++) {
    const chapter = {
      id: `advanced-${i}`,
      title: `Fonctionnalités avancées - Partie ${i}`,
      lessons: []
    };

    for (let j = 0; j < 10; j++) {
      chapter.lessons.push({
        id: `advanced-lesson-${i}-${j}`,
        title: `Leçon ${j + 1}: ${
          isJavaScript 
            ? `Techniques Discord.js avancées ${i}.${j + 1}`
            : `Concepts discord.py avancés ${i}.${j + 1}`
        }`,
        content: isJavaScript ? generateDiscordJsContent(i + j) : generateDiscordPyContent(i + j)
      });
    }

    chapters.push(chapter);
  }

  return chapters;
};

export const discordJsCourse: Course = {
  id: 'discord.js',
  title: 'Discord.js (JavaScript)',
  description: 'Maîtrisez la création de bots Discord avec JavaScript et Discord.js v14. De l\'installation aux fonctionnalités avancées.',
  icon: 'JS',
  chapters: generateChaptersAndLessons(true)
};

export const discordPyCourse: Course = {
  id: 'discord.py',
  title: 'discord.py (Python)',
  description: 'Apprenez à créer des bots Discord puissants avec Python et discord.py. Du débutant à l\'expert.',
  icon: 'PY',
  chapters: generateChaptersAndLessons(false)
};