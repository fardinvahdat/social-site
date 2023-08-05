export const useTicketListStore = defineStore("ticket-list", () => {
  const list = ref([]);
  return { list };
});
