(() => {
    document.querySelectorAll('[data-research-tabs]').forEach((root, rootIndex) => {
        if (root.dataset.tabsReady) return;
        const children = Array.from(root.children);
        const headings = children.filter(element => element.tagName === 'H2');
        if (headings.length < 2) return;

        const tablist = document.createElement('div');
        tablist.className = 'research-tab-list';
        tablist.setAttribute('role', 'tablist');
        tablist.setAttribute('aria-label', 'Research areas');
        const panels = [];
        const buttons = [];
        let currentPanel = null;

        children.forEach(element => {
            if (element.tagName === 'H2') {
                const index = panels.length;
                const id = 'research-' + rootIndex + '-' + index;
                currentPanel = document.createElement('section');
                currentPanel.className = 'research-tab-panel';
                currentPanel.id = id + '-panel';
                currentPanel.setAttribute('role', 'tabpanel');
                currentPanel.setAttribute('aria-labelledby', id + '-tab');
                currentPanel.tabIndex = 0;
                root.appendChild(currentPanel);
                panels.push(currentPanel);

                const button = document.createElement('button');
                button.type = 'button';
                button.id = id + '-tab';
                button.className = 'research-tab';
                button.textContent = element.textContent.replace(/#\s*$/, '').trim();
                button.setAttribute('role', 'tab');
                button.setAttribute('aria-controls', currentPanel.id);
                tablist.appendChild(button);
                buttons.push(button);
            }
            if (currentPanel) currentPanel.appendChild(element);
        });
        root.prepend(tablist);
        root.dataset.tabsReady = 'true';

        function select(index, focus) {
            buttons.forEach((button, i) => {
                button.setAttribute('aria-selected', String(i === index));
                button.tabIndex = i === index ? 0 : -1;
                panels[i].hidden = i !== index;
            });
            if (focus) buttons[index].focus();
        }

        function selectFromHash() {
            let id;
            try { id = decodeURIComponent(location.hash.slice(1)); }
            catch (_) { return; }
            const target = id ? document.getElementById(id) : null;
            const index = panels.findIndex(panel => panel === target || (target && panel.contains(target)));
            if (index >= 0) select(index, false);
        }

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => select(index, false));
            button.addEventListener('keydown', event => {
                let next;
                if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
                else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = buttons.length - 1;
                else return;
                event.preventDefault();
                select(next, true);
            });
        });
        select(0, false);
        selectFromHash();
        window.addEventListener('hashchange', selectFromHash);
    });
})();
