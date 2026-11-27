const copyButtons = document.querySelectorAll(".copy-button[data-copy]");
const copyStatus = document.querySelector(".copy-status");
const copyIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path></svg>';
const copiedIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>';

async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        return;
    }

    const temporaryField = document.createElement("textarea");
    temporaryField.value = value;
    temporaryField.setAttribute("readonly", "");
    temporaryField.style.position = "fixed";
    temporaryField.style.opacity = "0";
    document.body.appendChild(temporaryField);
    temporaryField.select();
    const copied = document.execCommand("copy");
    temporaryField.remove();

    if (!copied) throw new Error("No se pudo copiar el texto.");
}

copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        const value = button.dataset.copy;
        const label = button.dataset.copyLabel;

        try {
            await copyText(value);
            button.innerHTML = copiedIcon;
            button.classList.add("is-copied");
            button.setAttribute("aria-label", `${label} copiado`);
            button.title = `${label} copiado`;
            if (copyStatus) copyStatus.textContent = `${label} copiado al portapapeles.`;
        } catch {
            if (copyStatus) copyStatus.textContent = `No se pudo copiar el ${label}. Selecciónalo y cópialo manualmente.`;
        }

        window.setTimeout(() => {
            button.innerHTML = copyIcon;
            button.classList.remove("is-copied");
            button.setAttribute("aria-label", `Copiar ${label}`);
            button.title = `Copiar ${label}`;
        }, 1500);
    });
});