import glob
import os
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, ElementTree, indent

def generateSitemap(repoRoot):
    """Generate sitemap.xml at the repo root from all HTML files."""
    sitemapPath = Path(repoRoot) / "sitemap.xml"

    # Collect all HTML pages relative to repo root
    pages = []

    # Root-level pages
    for htmlFile in glob.glob(os.path.join(repoRoot, '*.html')):
        relPath = os.path.basename(htmlFile)
        pages.append(relPath)

    # files/ pages
    filesDir = os.path.join(repoRoot, 'files')
    if os.path.isdir(filesDir):
        for htmlFile in sorted(glob.glob(os.path.join(filesDir, '*.html'))):
            relPath = 'files/' + os.path.basename(htmlFile)
            pages.append(relPath)

    # guides/ pages
    guidesDir = os.path.join(repoRoot, 'guides')
    if os.path.isdir(guidesDir):
        for htmlFile in sorted(glob.glob(os.path.join(guidesDir, '*.html'))):
            relPath = 'guides/' + os.path.basename(htmlFile)
            pages.append(relPath)

    # docs/ pages
    docsDir = os.path.join(repoRoot, 'docs')
    if os.path.isdir(docsDir):
        for htmlFile in sorted(glob.glob(os.path.join(docsDir, '*.html'))):
            relPath = 'docs/' + os.path.basename(htmlFile)
            pages.append(relPath)

    # Build XML
    ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    urlset = Element('urlset', xmlns=ns)

    for page in pages:
        url = SubElement(urlset, 'url')
        loc = SubElement(url, 'loc')
        loc.text = page

    tree = ElementTree(urlset)
    indent(tree, space='  ')

    with open(sitemapPath, 'wb') as f:
        tree.write(f, encoding='utf-8', xml_declaration=True)

    print(f"Generated sitemap.xml with {len(pages)} URLs")
    return True
