<script setup lang="ts">
import { ref } from 'vue';
import type { MealAnalysis, RouteOptions } from './types';

// Estado reactivo con tipos
const mealInput = ref<string>('');
const analysis = ref<MealAnalysis | null>(null);

const options = ref<RouteOptions>({
  type: 'circular',
  activity: 'walking',
  weight: 70
});

const calculateRoute = async () => {
  console.log("Calculando para:", mealInput.value);
  // Aquí irá la llamada al backend para calcular la ruta
  
}

</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
    <header class="bg-indigo-700 text-white p-5 shadow-lg flex justify-between items-center">
      <h1 class="text-2xl font-black tracking-tighter uppercase italic">🔥 BurnMyMeal</h1>
      <span class="text-xs font-mono bg-indigo-800 px-2 py-1 rounded">v1.0.0-beta</span>
    </header>

    <main class="flex-1 flex flex-col lg:flex-row p-6 gap-6">
      <aside class="w-full lg:w-96 flex flex-col gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <label class="block text-sm font-bold mb-2 uppercase text-slate-500">Registro de comida</label>
          <textarea 
            v-model="mealInput"
            class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
            placeholder="Ej: He cenado un poke de salmón y un té verde..."
            rows="4"
          ></textarea>

          <div class="mt-4 grid grid-cols-2 gap-2">
            <select v-model="options.activity" class="p-2 bg-slate-100 rounded-lg text-sm border-none">
              <option value="walking">Caminar 🚶</option>
              <option value="running">Correr 🏃</option>
              <option value="cycling">Bici 🚲</option>
            </select>
            <input v-model.number="options.weight" type="number" class="p-2 bg-slate-100 rounded-lg text-sm border-none" placeholder="Peso (kg)">
          </div>

          <button 
            @click="calculateRoute"
            class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-95">
            TRAZAR CAMINO
          </button>
        </div>
      </aside>

      <section class="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
        <div id="map" class="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div class="text-center">
            <div class="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-slate-400 font-medium">Inicializando motor geográfico...</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
