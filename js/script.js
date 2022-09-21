const markAsReadBtn = document.getElementById('header__btn');
const notificationsList = Array.from(document.getElementById('notifications__list').children);

console.log(notificationsList.children);

// SET NOTIFICATION COUNT IN HEADER LOGIC

const setNotifcationCount = (notifications) => {
    const notificationsCount = document.getElementById('header__notifications-count');

    const count = notifications.reduce((acc, el) => {
        if (el.classList.contains('unread')) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    notificationsCount.innerText = count;
};

setNotifcationCount(notificationsList);

// MARK ALL AS READ BUTTON LOGIC

const setAllAsRead = (notifications) => {
    notifications.forEach((el) => {
        if (el.classList.contains('unread')) {
            el.classList.remove('unread');
        }
    });
};

markAsReadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    setAllAsRead(notificationsList);
    setNotifcationCount(notificationsList);
});

// MARK INDIVIDUAL AS READ BY CLICKING LOGIC

const setNotificationAsRead = (notification) => {
    if (notification.classList.contains('unread')) {
        notification.classList.remove('unread');
    }
};

notificationsList.forEach((notification) => {
    notification.addEventListener('click', () => {
        setNotificationAsRead(notification);
        setNotifcationCount(notificationsList);
    });
});
