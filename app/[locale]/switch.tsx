'use client';

import { useChangeLocale, useCurrentLocale } from '../../locales/client';

export function SwitchLocal() {

    // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
    const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

    const local = useCurrentLocale();

    return (
        <>
            <form className="">
                <select id="countries" onChange={(event) => changeLocale(event.target.value)} className="bg-quaternary border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-24 p-2">
                    <option value='en' selected={local === 'en'}>
                        <div className="flex flex-row gap-2">
                            <span> 🇺🇸 </span>
                            <span>En</span>
                        </div>
                    </option>
                    <option value='fa' selected={local === 'fa'}>
                        <div className="inline-flex items-center justify-between">
                            <span> 🇮🇷 </span>
                            <span>Fa</span>
                        </div>
                    </option>
                </select>
            </form>
        </>
    );
}
