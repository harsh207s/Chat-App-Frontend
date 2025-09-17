     // Tab switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('border-purple-600', 'text-purple-600', 'dark:text-purple-400'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding content
                    button.classList.add('border-purple-600', 'text-purple-600', 'dark:text-purple-400');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Theme toggle functionality
            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = themeToggle.querySelector('i');
            
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                
                if (document.body.classList.contains('dark-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            });
            
            // Chat search functionality
            const searchInput = document.getElementById('search-chats');
            const chatItems = document.querySelectorAll('.p-4.border-b');
            
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                
                chatItems.forEach(chat => {
                    const name = chat.querySelector('h3').textContent.toLowerCase();
                    const message = chat.querySelector('p').textContent.toLowerCase();
                    
                    if (name.includes(searchTerm) || message.includes(searchTerm)) {
                        chat.style.display = 'flex';
                    } else {
                        chat.style.display = 'none';
                    }
                });
            });
            
            // Simulate typing indicators and message updates
            setInterval(() => {
                const typingIndicator = document.querySelector('.typing-indicator');
                if (typingIndicator) {
                    typingIndicator.style.display = Math.random() > 0.5 ? 'inline-flex' : 'none';
                }
            }, 5000);
            
            // Simulate online status changes
            setInterval(() => {
                const statusIndicators = document.querySelectorAll('.absolute .bg-green-500');
                statusIndicators.forEach(indicator => {
                    if (Math.random() > 0.7) {
                        indicator.classList.toggle('bg-green-500');
                        indicator.classList.toggle('bg-gray-400');
                    }
                });
            }, 10000);
        });