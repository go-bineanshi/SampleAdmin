export const useNotificationStore = defineStore('notification', {
  state: () => {
    const notifications = [];
    return {
      notifications,
      notificationCount: 0,
    };
  },
  actions: {
    addNotification(text, type = 'info') {
      this.notifications.push({
        id: this.notificationCount++,
        text: text,
        type: type,
        time: new Date(),
        show: true,
      });
    },
    delNotification(id) {
      const index = this.notifications.findIndex((m) => m.id === id);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },
  },
});

export const Notify = {
  info: (text) => useNotificationStore().addNotification(text, 'info'),
  success: (text) => useNotificationStore().addNotification(text, 'success'),
  warning: (text) => useNotificationStore().addNotification(text, 'warning'),
  error: (val) => {
    let text = '';
    if (typeof val === 'string') {
      text = val;
    } else if (val instanceof Error) {
      text = val.message;
    } else {
      text = JSON.stringify(val);
    }
    useNotificationStore().addNotification(text, 'error');
  },
};
